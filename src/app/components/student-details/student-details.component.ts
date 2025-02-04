import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    const studentId = this.route.snapshot.paramMap.get('id');
    this.fetchStudentDetails(studentId);
  }

  fetchStudentDetails(id: string | null): void {
    this.dataService.getStudents().subscribe(data => {
      this.student = data;
    });
  }

  goBack(){

  }
}