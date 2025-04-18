import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-resume-page',
  templateUrl: './resumeComp.html',
  styleUrls: ['./resumeComp.css']
})
export class ResumeComponent {

  @Input() visibleSection!: string;
}