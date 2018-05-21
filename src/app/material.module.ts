import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatSelectModule, MatExpansionModule, MatPaginatorModule, MatButtonModule, MatTableModule, MatInputModule, MatListModule, MatIconModule, MatFormFieldModule, MatGridListModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
    imports : [ MatTabsModule, MatSelectModule, MatExpansionModule, MatTableModule, MatListModule, MatPaginatorModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatCardModule, MatIconModule, MatProgressSpinnerModule],
    exports : [ MatTabsModule, MatSelectModule, MatExpansionModule, MatTableModule, MatListModule, MatPaginatorModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatCardModule, MatIconModule, MatProgressSpinnerModule]
})

export class MaterialModule{ }