import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators} from '@angular/forms';
import { IntroComponent } from './intro.component';

describe('IntroComponent', () => {
  let component: IntroComponent;
  let fixture: ComponentFixture<IntroComponent>;
  let spy: any;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroComponent ],
      providers: [
        { provide: FormBuilder, useValue: {} },
        { provide: Validators, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    spy = spy(FormBuilder, 'group').and.returnValue(false);
    expect(component).toBeTruthy();
  });
});
