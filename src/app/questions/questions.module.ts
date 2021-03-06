import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionsComponent} from './questions/questions.component';
import {QuestionComponent} from './question/question.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {IConfig, QuestionsService} from '../shared/questions.service';
import {FlexModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import {ScrollingModule} from '@angular/cdk/scrolling';

const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent
  }
];

@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionComponent
  ],
  entryComponents: [
    QuestionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forChild(routes),
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
    FormsModule,
    MatTableModule,
    CdkTableModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    ScrollingModule,
    MatSortModule
  ],
  exports: [RouterModule]
})
export class QuestionsModule {
  static forRoot(config: IConfig): ModuleWithProviders {
    return {
      ngModule: QuestionsModule,
      providers: [
        QuestionsService,
        {
          provide: 'config',
          useValue: config
        }
      ]
    };
  }
}
