import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbModal, NgbDateParserFormatter, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public inputNgbDate: NgbDate;
  public yourDate: Date;
  public closeResult: string = "";

  constructor(private modalService: NgbModal, private ngbDateParserFormatter: NgbDateParserFormatter) { }

  ngOnInit(): void {
  }


  open(content) {
    this.modalService
      .open(content, { scrollable: true , ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.yourDate = new Date(this.ngbDateParserFormatter.format(this.inputNgbDate));
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.inputNgbDate = null;
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

}
