import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/service/userservice.service';
declare let paypal: any;

@Component({
  selector: 'app-billdetail',
  templateUrl: './billdetail.component.html',
  styleUrls: ['./billdetail.component.css'],
})
export class BilldetailComponent implements OnInit, AfterViewChecked {
  movieName = sessionStorage.getItem('movieName');
  listSeatName = JSON.parse(sessionStorage.getItem('listSeatName'));
  totalPriceofSeat = sessionStorage.getItem('totalPriceofSeat');
  foodName = JSON.parse(sessionStorage.getItem('foodName'));
  foodBill = JSON.parse(sessionStorage.getItem('foodBill'));
  listSeatStatus = JSON.parse(sessionStorage.getItem('listSeatStatus'));
  listSeat = JSON.parse(sessionStorage.getItem('listSeat'));
  total = sessionStorage.getItem('total');
  showtime;
  price;
  Ticket: {
    ticketQuantity: any;
    memberId: any;
    showtimeId: any;
    ticketPriceAmount: any;
    code: any;
    total: any;
    listSeatStatus: any;
    listSeat: any;
    listFoodBillDetail: any;
  };

  constructor(
    private userService: UserserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadShowtimeById();
    this.checkPrice();
  }

  loadShowtimeById(): void {
    this.userService.getShowtimeById().subscribe(
      (data) => {
        this.showtime = data.data;
      },
      (error) => console.log(error)
    );
  }

  checkPrice(): void {
    this.Ticket = {
      ticketQuantity: sessionStorage.getItem('seatQuality'),
      memberId: sessionStorage.getItem('memberId'),
      showtimeId: sessionStorage.getItem('showtimeId'),
      ticketPriceAmount: this.totalPriceofSeat,
      code: '',
      total: this.total,
      listSeatStatus: this.listSeatStatus,
      listSeat: this.listSeat,
      listFoodBillDetail: this.foodBill,
    };
    this.userService.checkPrice(this.Ticket).subscribe((data) => {
      this.price = data.data;
    });
  }

  onSubmit() {
    sessionStorage.removeItem('total');
    sessionStorage.removeItem('movieId');
    sessionStorage.removeItem('listSeatStatus');
    sessionStorage.removeItem('listSeat');
    sessionStorage.removeItem('movieName');
    sessionStorage.removeItem('showtimeId');
    sessionStorage.removeItem('foodName');
    sessionStorage.removeItem('foodBill');
    sessionStorage.removeItem('listSeatName');
    sessionStorage.removeItem('totalPriceofSeat');
    sessionStorage.removeItem('seatQuality');
    this.router.navigate(['/']);
  }

  addTicket(): void {
    this.Ticket = {
      ticketQuantity: sessionStorage.getItem('seatQuality'),
      memberId: sessionStorage.getItem('memberId'),
      showtimeId: sessionStorage.getItem('showtimeId'),
      ticketPriceAmount: this.totalPriceofSeat,
      code: '',
      total: this.total,
      listSeatStatus: this.listSeatStatus,
      listSeat: this.listSeat,
      listFoodBillDetail: this.foodBill,
    };
    this.userService.addTicket(this.Ticket).subscribe((data) => {});
    sessionStorage.removeItem('total');
    sessionStorage.removeItem('movieId');
    sessionStorage.removeItem('listSeatStatus');
    sessionStorage.removeItem('listSeat');
    sessionStorage.removeItem('movieName');
    sessionStorage.removeItem('showtimeId');
    sessionStorage.removeItem('foodName');
    sessionStorage.removeItem('foodBill');
    sessionStorage.removeItem('listSeatName');
    sessionStorage.removeItem('totalPriceofSeat');
    sessionStorage.removeItem('seatQuality');
    this.router.navigate(['/checkout']);
  }

  addScript: boolean = false;
  paypalLoad: boolean = true;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox:
        'ASSBTfijLv1HSyog69GctngaBixJ5StJ0ixfMcLN3LKaXJU6xsQI4_-aHhEuuuyWJhlxlk2qYEsVjlk2',
      production: '',
    },
    comit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            {
              amount: {
                total: Math.round((Number(this.price) / 23000) * 100) / 100,
                currency: 'USD',
              },
              description:
                String(sessionStorage.getItem('movieName')) + '     Combo Food',
            },
          ],
        },
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        this.addTicket();
      });
    },
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      });
    }
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, rejects) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    });
  }
}
