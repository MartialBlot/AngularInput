import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor() { }

  public developer = new Developer("BLOT", "Martial", 24, "male","Coucou je suis content",[
    new Skill("Angular", "Logo", "www.internet.fr"),
    new Skill("JS", "Logo", "www.JS.fr")
  ])


  ngOnInit() {
  }

}
