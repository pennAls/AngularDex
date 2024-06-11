import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeinfoComponent } from './pokeinfo.component';

describe('PokeinfoComponent', () => {
  let component: PokeinfoComponent;
  let fixture: ComponentFixture<PokeinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
