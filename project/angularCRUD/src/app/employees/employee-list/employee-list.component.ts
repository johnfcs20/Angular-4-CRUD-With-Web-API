import { Component, OnInit } from '@angular/core';

import {EmployeeService } from '../shared/employee.service';
import {Employee} from '../shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeService: EmployeeService) { }

  ngOnInit() {
    this.employeService.getEmployeeList();
  }

  showForEdit(emp: Employee, id: number) {

    this.employeService.selectedEmployee = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?') === true) {
      this.employeService.deleteEmploye(id)
                         .subscribe(x => {
                           this.employeService.getEmployeeList();
                         });
      swal('Good job!', 'employe deleted', 'success');
    }
  }

}
