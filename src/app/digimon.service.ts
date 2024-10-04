import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  // Variable que se usará para guardar y recuperar los Digimon del localStorage
  private storageKey = 'digimons';

  // Constructor
  constructor() {
      // Verifica si hay Digimon guardados en el localStorage. Si los encuentra, los carga en la propiedad 'digimons'.
      if (this.isLocalStorageAvailable()) {
        const savedDigimons = localStorage.getItem(this.storageKey);
        if (savedDigimons) {
          this.digimons = JSON.parse(savedDigimons);
        }
      }
  }

  digimons = [
    {id: 1, name: 'Agumon', type: 'Reptil', desc: '', attack: {}},
    {id: 2, name: 'Gabumon', type: 'Reptil', desc: '', attack: {}},
    {id: 3, name: 'Patamon', type: 'Mamífero', desc: '', attack: {}}
  ];

  getItemById(id: number): any {
    return this.digimons.find(digimons => digimons.id === id);
  }

  getDigimons(){
    return this.digimons;
  }

  addDigimon(name: string, type: string, desc: string, attack: {})
  {
    const newId = this.digimons.length > 0 
    ? Math.max(...this.digimons.map(digimon => digimon.id)) + 1 
    : 1;

    const digimon = {id: newId, name, type, desc, attack};

    this.digimons.push(digimon);
    // Guarda el vector actualizado en localStorage
    this.saveToLocalStorage();   
  }

  deleteDigimon(index: number){
    this.digimons.splice(index, 1);
     // Guarda el vector actualizado en localStorage
     this.saveToLocalStorage();  
  }

  // Método para guardar la lista de Digimon en localStorage como un string JSON.
  private saveToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.digimons)); // Convierte el arreglo a JSON y lo guarda
  }

  // Método que verifica si localStorage está disponible en el entorno actual
  private isLocalStorageAvailable(): boolean {
    try {
      return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    } catch (e) {
      return false;
    }
  }
}
