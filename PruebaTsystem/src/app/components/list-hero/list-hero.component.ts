import {Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Hero } from 'src/app/interfaces/hero';
import { HeroService } from 'src/app/services/hero/hero.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-hero',
  styleUrls: ['list-hero.component.scss'],
  templateUrl: 'list-hero.component.html'
})
 
export class ListHeroComponent {
  displayedColumns: string[] = ['select', 'name', 'race', 'combat', 'occupation', 'actions'];
  data = this.heroService.getHeroes();
  dataSource = new MatTableDataSource<Hero>(this.data);
  selection = new SelectionModel<Hero>(true, []);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private heroService: HeroService, private router: Router){
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addHero(){
    this.router.navigateByUrl('/add')
  }

  editHero(hero: Hero): void {
    this.heroService.sendHero(hero);
    this.router.navigateByUrl('/heroDetails');
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  removeSelectedRows() {
    let index: number;
    this.selection.selected.forEach((item:any) => {
      index = this.data.findIndex((d:any) => d === item);
      console.log(this.data.findIndex((d:any) => d === item));
      this.data.splice(index,1)
      this.heroService.deleteHero(index);
      this.dataSource = new MatTableDataSource<Hero>(this.data);
    });
    this.selection = new SelectionModel<Hero>(true, []);
    console.log("this.data", this.data);
    console.log(this.dataSource);
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach((row: any) => this.selection.select(row));
  }

}