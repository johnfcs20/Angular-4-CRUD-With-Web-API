import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import {Employee} from './employee.model';


@Injectable()
export class EmployeeService {

  selectedEmployee: Employee ;
  employeeList: Employee[];

  constructor(private http: Http) {   }

  postEmployee(emp: Employee) {
    const body = JSON.stringify(emp);
    const headerOptions = new Headers({'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    console.log(emp);

    return this.http.post('http://localhost:51082/api/Employee/', body, requestOptions).map(x => {
    x.json();


    });

  }

  getEmployeeList() {

    this.http.get('http://localhost:51082/api/Employee/')
            .map((data: Response) => {
                        return data.json() as Employee [];
                      }).toPromise().then(x => {
                        this.employeeList = x;
                      });

  }


  putEmployee(id, emp) {
    const body = JSON.stringify(emp);
    const headerOptions = new Headers({'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({method: RequestMethod.Put, headers: headerOptions});
    console.log(emp);

    return this.http.put('http://localhost:51082/api/Employee?=' + id, body, requestOptions).map(x => {
    x.json();

    });

  }

  deleteEmploye(id: number) {

    return this.http.delete('http://localhost:51082/api/Employee/' + id)
                    .map(res => res.json());

   }

}
