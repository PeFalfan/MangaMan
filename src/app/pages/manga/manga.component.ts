import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MangaService } from '../../services/manga-service/manga.service';
import { ProductModel } from '../../models/productModel';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-manga',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './manga.component.html',
  styleUrl: './manga.component.css',
  providers: [MangaService]
})
export class MangaComponent {

  productos: ProductModel[] = [];

  productsInShoppingCart: ProductModel[] = [];

  constructor(private mangaService: MangaService, private router: Router,) { }

  ngOnInit(): void {
    this.mangaService.getProducts().subscribe(data => {
      this.productos = data;
    });
  }

  goToShoppingCart() {

    const navigationExtras: NavigationExtras = {
      state: {
        data: this.productsInShoppingCart
      }
    };

    this.router.navigate(['/carro-de-compras'], navigationExtras);
  }

  addToCart(product: ProductModel) {

    this.productsInShoppingCart.push(product);

    alert('Producto añadido al carro!')
  }
}
