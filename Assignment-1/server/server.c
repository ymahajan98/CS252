/* credit @Daniel Scocco */

/****************** SERVER CODE ****************/

#include <stdio.h>
#include <netinet/in.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>


int main(){
int i=0;
FILE * file;
  int welcomeSocket, newSocket;
char c;
  char buffer[1024];
  char buffer1[300000];
  struct sockaddr_in serverAddr;
  struct sockaddr_storage serverStorage;
  socklen_t addr_size;

  /*---- Create the socket. The three arguments are: ----*/
  /* 1) Internet domain 2) Stream socket 3) Default protocol (TCP in this case) */
  welcomeSocket = socket(PF_INET, SOCK_STREAM, 0);

  /*---- Configure settings of the server address struct ----*/
  /* Address family = Internet */
  serverAddr.sin_family = AF_INET;
  /* Set port number, using htons function to use proper byte order */
  serverAddr.sin_port = htons(5432);
  /* Set IP address to localhost */
  serverAddr.sin_addr.s_addr = inet_addr("0.0.0.0");
  /* Set all bits of the padding field to 0 */
  memset(serverAddr.sin_zero, '\0', sizeof serverAddr.sin_zero);

  /*---- Bind the address struct to the socket ----*/
  bind(welcomeSocket, (struct sockaddr *) &serverAddr, sizeof(serverAddr));

  /*---- Listen on the socket, with 5 max connection requests queued ----*/
  if(listen(welcomeSocket,5)==0)
    printf("I'm listening\n");
  else
    printf("Error\n");
while(1)
{
  /*---- Accept call creates a new socket for the incoming connection ----*/
  i=0;
  addr_size = sizeof serverStorage;
  newSocket = accept(welcomeSocket, (struct sockaddr *) &serverStorage, &addr_size);

  /*---- Send message to the socket of the incoming connection ----*/
 recv(newSocket,buffer,1024,0);
 // printf("%s",buffer);
 int num_trucks=0;
 int num_cars=0;
 int num_cats=0;
 int num_dogs=0;
 int k;
 for( k=0;buffer[k]!='\0';k++)
 {
 	if(buffer[k]=='t'&& buffer[k+1]=='r'){
 		num_trucks=buffer[k-2] - '0';
 	}
 	else if(buffer[k]=='d'){
 		num_dogs=buffer[k-2] - '0';
 	}
 	else if(buffer[k]=='c' && buffer[k+2]=='r'){
    num_cars=buffer[k-2] - '0';
 	}
 	else if(buffer[k]=='c' && buffer[k+2]=='t'){
 		num_cats=buffer[k-2] - '0';
 	}
 }
 char string[15]="./ab.sh 0 0 0 0";
 string[8]=num_cars+'0';
 string[10]=num_cats+'0';
 string[12]=num_dogs+'0';
 string[14]=num_trucks+'0';
 // printf("%s\n",string);
 system(string);
 // printf("%d %d %d %d",num_trucks,num_cats,num_cars,num_dogs);
file=fopen("index.html","r");
if (file) {
    while ((c=getc(file))!=EOF){
       buffer1[i++]=c;
     }
}

char buffer2[1000];
int iter=0;
int x=0;
while(iter<300){
  for(x=0;x<1000;x++)
  {
    buffer2[x]=buffer1[iter*1000+x];
  }
  send(newSocket,buffer2,1000,0);
  iter++;
}
system("rm index.html");
memset(buffer1, 0, sizeof buffer1);
memset(buffer, 0, sizeof buffer);
}
    return 0;
  }
