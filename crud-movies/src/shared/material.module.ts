import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginator} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';

@NgModule({
    imports:[
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatFormFieldModule,
        MatChipsModule,
        MatGridListModule,
        
    ],
    exports:[
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatFormFieldModule,
        MatChipsModule,
        MatGridListModule,
        MatPaginator,
        MatSortModule,
        
        
    ]
})
export class MaterialModule{}