import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../digimon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digimon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './digimon-list.component.html',
  styleUrl: './digimon-list.component.css'
})
export class DigimonListComponent implements OnInit
{

  tiposDigimon: string[] = ['Reptil', 'Mamífero', 'Ave'];

  digimons: {id: number, name: string, type: string} []= [];

  editingIndex: number | null = null;
  dialog: any;

  constructor(private digimonService: DigimonService, private router: Router){}

  ngOnInit(): void {
    this.digimons = this.digimonService.getDigimons();
  }

  deleteDigimons(id: number){
    this.digimonService.deleteDigimon(id);
  }

  viewDigimon(id: number){
    this.router.navigate(['/digimon', id]);
  }

}