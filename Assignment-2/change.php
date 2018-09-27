
<?php
	$database = "employees";
	
	$server = "localhost";
	$user = "root";
	$key = "Kkpk@3k#i+";
	$connection = new mysqli($server, $user, $key, $database);
		$sql = "";
		if ($_REQUEST["QUERY"] == query1) {
		    $sql = "SELECT employees.emp_no, employees.last_name, departments.dept_name
		    		FROM employees
		    		INNER JOIN dept_emp ON (employees.emp_no = dept_emp.emp_no) 
		    		INNER JOIN departments ON (dept_emp.dept_no = departments.dept_no)";

		    if ($_REQUEST["emp_no"] != "") {
		        $sql = $sql . " AND employees.emp_no = '" . $_REQUEST["emp_no"] . "'";
		    }
		    if ($_REQUEST["last_name"] != "") {
		        $sql = $sql . " AND employees.last_name = '" . $_REQUEST["last_name"] . "'";
		    }
		    if ($_REQUEST["dept_name"] != "") {
		        $sql = $sql . " AND departments.dept_name = '" . $_REQUEST["dept_name"] . "'";
		    }

		    $result = $connection->query($sql);
		    if ($result->num_rows > 0) {

		    	echo '<style>
					table, th, td {
    				border: 1px solid black;
					}
				</style>';

		    	echo '<table>
    					<tr>
        					<th>ID</th>
       						<th>Last name</th>
                            <th>Department</th>
    					</tr>';
		        while ($row = $result->fetch_assoc()) {
		            $newArray = array_values($row);

		             echo '<tr>
            				<td>'.$newArray[0].'</td>
            				<td>'.$newArray[1].'</td>
           					 <td>'.$newArray[2].'</td>
       					 </tr>';
		        }

		        echo '</table>';
		    } else {
		        echo "NOT FOUND";
		    }
		}
		
		else if ($_REQUEST["QUERY"] == query2) {
		    $sql = "SELECT COUNT(dept_emp.emp_no) AS 'Total employees', departments.dept_name
		    		FROM dept_emp 
		    		INNER JOIN departments ON (dept_emp.dept_no = departments.dept_no) 
		    		GROUP BY dept_emp.dept_no ORDER BY COUNT(dept_emp.emp_no)";

		    $result = $connection->query($sql);
		    if ($result->num_rows > 0) {

		    	echo '<style>
					table, th, td {
    				border: 1px solid black;
					}
				</style>';


		    	echo '<table>
    					<tr>
        					<th>Number of employees</th>
                            <th>Department</th>
    					</tr>';
		        while ($row = $result->fetch_assoc()) {
		            $newArray = array_values($row);

		             echo '<tr>
            				<td>'.$newArray[0].'</td>
            				<td>'.$newArray[1].'</td>
       					 </tr>';
		        }

		        echo '</table>';
		    } else {
		        echo "NOT FOUND";
		    }
		    
		}
		
		else if ($_REQUEST["QUERY"] == query3) {
		    $sql = "SELECT employees.emp_no, employees.first_name, employees.last_name, employees.hire_date
		    		FROM employees 
		    		INNER JOIN dept_emp ON (employees.emp_no = dept_emp.emp_no)
		    		INNER JOIN departments ON (dept_emp.dept_no = departments.dept_no) 
		    		AND departments.dept_name = ('".$_REQUEST["dept_name"]."')
		    		ORDER BY  employees.hire_date";

		    $result = $connection->query($sql);
		    if ($result->num_rows > 0) {

		    	echo '<style>
					table, th, td { 
    				border: 1px solid black;
					}
				</style>';


		    	echo '<table>
    					<tr>
        					<th>ID</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Hire date</th>
    					</tr>';
		        while ($row = $result->fetch_assoc()) {
		            $newArray = array_values($row);

		             echo '<tr>
            				<td>'.$newArray[0].'</td>
            				<td>'.$newArray[1].'</td>
            				<td>'.$newArray[2].'</td>
            				<td>'.$newArray[3].'</td>
					</tr>';
		        }

		        echo '</table>';
		    } 
		} 
		
		else if ($_REQUEST["QUERY"] == query4) {
		    $s1 = "SELECT COUNT(employees.emp_no) AS 'male_employees' 
		    	   FROM employees
		    	   INNER JOIN dept_emp ON employees.emp_no = dept_emp.emp_no  
		    	   INNER JOIN departments on dept_emp.dept_no = departments.dept_no
		    	   AND departments.dept_name = '" . $_REQUEST["dept_name"] . "' 
		    	   AND employees.gender = 'M'";

		    $s2 = "SELECT COUNT(employees.emp_no) AS 'female_employees' 
		    	   FROM employees
		    	   INNER JOIN dept_emp ON employees.emp_no = dept_emp.emp_no  
		    	   INNER JOIN departments on dept_emp.dept_no = departments.dept_no
		    	   AND departments.dept_name = '" . $_REQUEST["dept_name"] . "' 
		    	   AND employees.gender = 'F'";

		    echo 'Male to Female employees ratio ' . ($connection->query($s1)->fetch_assoc()["male_employees"]/ $connection->query($s2)->fetch_assoc()["female_employees"]) ;
		} 
		
		else if ($_REQUEST["QUERY"] == query5) {

		    $s1 = "SELECT SUM(salaries.salary) / COUNT(salaries.salary) AS 'male_employees' 
		    	   FROM employees
		    	   INNER JOIN salaries ON salaries.emp_no = employees.emp_no 
		    	   INNER JOIN dept_emp ON employees.emp_no = dept_emp.emp_no 
		    	   INNER JOIN departments on dept_emp.dept_no = departments.dept_no 
		    	   AND departments.dept_name = '" . $_REQUEST["dept_name"] . "' 
		    	   AND employees.gender = 'M'";

		     $s2 = "SELECT SUM(salaries.salary) / COUNT(salaries.salary) AS 'female_employees'
		    		FROM employees
		    		INNER JOIN salaries ON salaries.emp_no = employees.emp_no 
		    		INNER JOIN dept_emp ON employees.emp_no = dept_emp.emp_no 
		    		INNER JOIN departments on dept_emp.dept_no = departments.dept_no 
		    		AND departments.dept_name = '" . $_REQUEST["dept_name"] . "' 
		    		AND employees.gender = 'F'";

		    echo 'Male to female pay ratio ' . ($connection->query($s1)->fetch_assoc()["male_employees"] /$connection->query($s2)->fetch_assoc()["female_employees"]) ;
		} 
		$connection->close();
	?>
