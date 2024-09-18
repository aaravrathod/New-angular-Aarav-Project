import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListItemsComponent } from './game-list-items.component';

describe('GameListItemsComponent', () => {
  let component: GameListItemsComponent;
  let fixture: ComponentFixture<GameListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameListItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
