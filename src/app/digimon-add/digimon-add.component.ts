import { Component } from '@angular/core';
import { DigimonService } from '../digimon.service';

@Component({
  selector: 'app-digimon-add',
  standalone: true,
  imports: [],
  templateUrl: './digimon-add.component.html',
  styleUrl: './digimon-add.component.css'
})
export class DigimonAddComponent {
  constructor(private digimonService: DigimonService){}

  addDigimons(name: string, type: string, desc: string, attack: string){
    this.digimonService.addDigimon(name, type, desc, attack);
  }
}
