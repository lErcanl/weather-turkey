import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true },
    },
  ],
})
export class MapComponent implements OnInit {
  public cityName = '';
  public dropdownPlaceholder = 'Lütfen Bir İl Seçiniz';
  public left = '';
  public top = '';
  public apiKey: any;
  public isMobilePhone: boolean = false;
  public innerWidth: any;
  public cityList: boolean = false;
  public cities = [
    'Adana',
    'Adıyaman',
    'Afyon',
    'Ağrı',
    'Amasya',
    'Ankara',
    'Antalya',
    'Artvin',
    'Aydın',
    'Balıkesir',
    'Bilecik',
    'Bingöl',
    'Bitlis',
    'Bolu',
    'Burdur',
    'Bursa',
    'Çanakkale',
    'Çankırı',
    'Çorum',
    'Denizli',
    'Diyarbakır',
    'Edirne',
    'Elazığ',
    'Erzincan',
    'Erzurum',
    'Eskişehir',
    'Gaziantep',
    'Giresun',
    'Gümüşhane',
    'Hakkari',
    'Hatay',
    'Isparta',
    'Mersin',
    'İstanbul',
    'İzmir',
    'Kars',
    'Kastamonu',
    'Kayseri',
    'Kırklareli',
    'Kırşehir',
    'Kocaeli',
    'Konya',
    'Kütahya',
    'Malatya',
    'Manisa',
    'Kahramanmaraş',
    'Mardin',
    'Muğla',
    'Muş',
    'Nevşehir',
    'Niğde',
    'Ordu',
    'Rize',
    'Sakarya',
    'Samsun',
    'Siirt',
    'Sinop',
    'Sivas',
    'Tekirdağ',
    'Tokat',
    'Trabzon',
    'Tunceli',
    'Şanlıurfa',
    'Uşak',
    'Van',
    'Yozgat',
    'Zonguldak',
    'Aksaray',
    'Bayburt',
    'Karaman',
    'Kırıkkale',
    'Batman',
    'Şırnak',
    'Bartın',
    'Ardahan',
    'Iğdır',
    'Yalova',
    'Karabük',
    'Kilis',
    'Osmaniye',
    'Düzce',
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= '767') {
      this.isMobilePhone = true;
    }
    this.apiKey = sessionStorage.getItem('apiKey');
  }

  mouseover(param: string, e: any) {
    this.cityName = param;
    this.left = e.clientX + 20 + 'px';
    this.top = e.clientY + 20 + 'px';
  }

  mouseOut() {
    this.cityName = '';
  }

  showCity() {
    this.router.navigate(['/city', this.cityName]);
  }

  citySelect(cityName: string) {
    this.dropdownPlaceholder = '';
    this.cityName = cityName;
  }
}
