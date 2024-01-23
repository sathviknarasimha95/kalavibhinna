import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageModule } from './page/page.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { TestimonialModule } from './testimonial/testimonial.module';
import { ImageGridModule } from './image-grid/image-grid.module';


const modules = [
  NavbarModule,
  PageModule,
  FooterModule,
  TestimonialModule,
  ImageGridModule
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [...modules]
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders<ComponentsModule>{
    return {
      ngModule: ComponentsModule,
      providers: []
    };
  }
}
