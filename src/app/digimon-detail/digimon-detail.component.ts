import { Component } from '@angular/core';
import { DigimonService } from '../digimon.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-digimon-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './digimon-detail.component.html',
  styleUrl: './digimon-detail.component.css'
})
export class DigimonDetailComponent {
  digimon: any;

  constructor(private route: ActivatedRoute, private digimonService: DigimonService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Obtener el id de la URL
    this.digimon = this.digimonService.getItemById(id); // Obtener el elemento
  }
}
