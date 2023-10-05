import {Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Hero } from 'src/app/interfaces/hero';
import { HeroService } from 'src/app/services/hero/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-hero',
  styleUrls: ['list-hero.component.scss'],
  templateUrl: 'list-hero.component.html'
})
 
export class ListHeroComponent implements OnInit {
  displayedColumns: string[] = ['name', 'race', 'alignment', 'combat', 'occupation', 'actions'];
  data: any;
  dataSource: any;

  constructor(private heroService: HeroService, private router: Router){
  }

  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator;

  ngOnInit() {
    this.heroService.getAll().subscribe(res => {
      // Use MatTableDataSource for paginator
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginatorPageSize;
    });
  }

  retrieveHeroes(): void {
   this.data = this.heroService.getAll()
  .subscribe((data: any) => {
    this.data = data;
    console.log(this.data);
    return data;
  });
  this.dataSource = new MatTableDataSource(this.data);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addHero(){
    this.router.navigateByUrl('/add');
  }

  onButtonClickDelete(hero: Hero){

  }

  onButtonClickEdit(hero: Hero){
    
  }


}