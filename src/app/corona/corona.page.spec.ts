import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoronaPage } from './corona.page';

describe('CoronaPage', () => {
  let component: CoronaPage;
  let fixture: ComponentFixture<CoronaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoronaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
