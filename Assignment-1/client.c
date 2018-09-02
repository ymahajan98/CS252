
/* credit @Daniel Scocco */

/****************** CLIENT CODE ****************/

#include <stdio.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <string.h>
#include <arpa/inet.h>

int main(){
  int clientSocket;
  char buffer[300000];
  char buffer1[1024];
  struct sockaddr_in serverAddr;
  socklen_t addr_size;

  /*---- Create the socket. The three arguments are: ----*/
  /* 1) Internet domain 2) Stream socket 3) Default protocol (TCP in this case) */
  clientSocket = socket(PF_INET, SOCK_STREAM, 0);

  /*---- Configure settings of the server address struct ----*/
  /* Address family = Internet */
  serverAddr.sin_family = AF_INET;
  /* Set port number, using htons function to use proper byte order */
  serverAddr.sin_port = htons(5432);
  /* Set IP address to localhost */
  serverAddr.sin_addr.s_addr = inet_addr("0.0.0.0");
  /* Set all bits of the padding field to 0 */
  memset(serverAddr.sin_zero, '\0', sizeof serverAddr.sin_zero);

  /*---- Connect the socket to the server using the address struct ----*/
  addr_size = sizeof serverAddr;
  connect(clientSocket, (struct sockaddr *) &serverAddr, addr_size);

  scanf("%[^\n]",buffer1);

  send(clientSocket,buffer1,1024,0);

  /*---- Read the message from the server into the buffer ----*/
  char buffer2[1000];
  int iter=0;
  int x=0;
  while(iter<300){
    recv(clientSocket, buffer2, 1000, 0);
    for(x=0;x<1000;x++)
    {
      buffer[iter*1000+x]=buffer2[x];
    }
    iter++;
  }
  /*---- Print the received message ----*/

  printf("%s",buffer);
  return 0;
}
