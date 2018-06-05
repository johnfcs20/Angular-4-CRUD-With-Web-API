import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import {NgForm} from '@angular/forms';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {form.reset(); }
    this.employeeService.selectedEmployee = {
      EmployeeID: null,
      FirstName: '',
      LastaName: '',
      EmpCode: '',
      Position: '',
      Office: '',
    // tslint:disable-next-line:semicolon
    }
  }


onSubmit(form: NgForm ) {
  if ( form.value.EmployeeID == null) {
  this.employeeService.postEmployee(form.value)
                      .subscribe(Data => {
                        this.resetForm(form);
                        this.employeeService.getEmployeeList();
                        swal('Good job!', 'Employe registrer', 'success');
                      });
                    } else {

                        this.employeeService.putEmployee(form.value.Employeeid, form.value)
                                            .subscribe(data => {
                                                this.resetForm(form);
                                                this.employeeService.getEmployeeList();
                                                swal('Good job!', 'Employe update', 'success');
                                                      });


                    }
}

}
