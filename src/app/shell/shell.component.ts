import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DragulaService } from 'ng2-dragula';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/zShared/data.service';
import * as $AB from 'jquery';


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],

})
export class ShellComponent implements OnInit {
  selectedElementType: any;
  attributes: FormGroup;
  state: any;


  subs = new Subscription();

  constructor(private dragulaService: DragulaService,
    private fb: FormBuilder, private toastr: ToastrService,
    private dataService: DataService) {

    this.state = {
      HEADINGS: [],
      TEXTBOXES: [],
      TEXTAREA: []
    };
    this.subs.add(this.dragulaService.drop("PAGE_DESIGNER")
      .subscribe(({ name, el, target, source, sibling }) => {
        debugger;
        this.handleDroppedElement(el, target);

      })
    );

  }

  handleDroppedElement(sourceElement, targetContainer) {
    const sourceElementType = this.getValueOfTheAttribute(sourceElement, 'type');
    switch (sourceElementType) {
      case "HEADING":
        var heading = this.createElement('h1');
        heading.innerText = this.getValueOfTheAttribute(sourceElement, "heading");
        this.setAttribute(heading, 'identifier', sourceElementType);
        this.addClickEventAndAppendToDropContainer(heading, targetContainer);

        if (this.attributeExist(sourceElement, "bodyText")) {
          var span = this.createElement('span');
          span.innerText = this.getValueOfTheAttribute(sourceElement, 'bodyText');
          targetContainer.appendChild(span);
          targetContainer.appendChild(document.createElement("br"));
        }


        break;
      case "TEXTBOX":
        var textbox = this.createElement('input');
        this.setAttribute(textbox, 'identifier', sourceElementType);
        this.addClickEventAndAppendToDropContainer(textbox, targetContainer);
        targetContainer.appendChild(document.createElement("br"));
        break;
      case "TEXTAREA":
        var textarea = this.createElement('textarea');
        this.setAttribute(textarea, 'identifier', sourceElementType);
        this.addClickEventAndAppendToDropContainer(textarea, targetContainer);
        targetContainer.appendChild(document.createElement("br"));
        break;
    }
  }

  attributeExist(element, attribute) {
    if (element.getAttribute(attribute)) {
      return true;
    }
    return false;
  }

  getValueOfTheAttribute(element, attribute) {
    return element.getAttribute(attribute);
  }

  handleClickEvent(element) {
    debugger;
    var self = this;
    element.addEventListener("click", function () {


      if (!element.selected) {
        element.selected = true;
        element.style.setProperty("background-color", "blue");
        // $AB('#myModal2').modal('show');
        // $('#myModal').modal('hide');

        self.setAttribute(element, 'data-toggle', "modal");
        self.setAttribute(element, 'data-target', "#myModal2");
        debugger;

        self.selectedElementType = self.getValueOfTheAttribute(element, "identifier");
      }
      else {
        element.selected = false;
        // $AB('#myModal2').modal('hide');

        element.style.setProperty("background-color", "");
        self.removeAttribute(element, 'data-toggle');
        self.removeAttribute(element, 'data-target');
      }
    });
  }

  setStyle(element, key, value) {
    element.style.setProperty(key, value);
  }
  setAttribute(element, key, value) {
    debugger;
    element.setAttribute(key, value);
  }

  removeAttribute(element, key) {
    element.removeAttribute(key);
  }

  createElement(element) {
    return document.createElement(element);
  }

  addClickEventAndAppendToDropContainer(element, targetContainer) {
    this.setStyle(element, 'cursor', 'pointer');
    this.handleClickEvent(element);
    targetContainer.appendChild(element);
  }


  handleSaveElement() {
    debugger;

    console.log(this.attributes.value);

    switch (this.selectedElementType) {
      case "TEXTBOX":
        this.state.TEXTBOXES.push(this.attributes.value);
        break;
      case "HEADING":
        this.state.HEADINGS.push(this.attributes.value);
        break;
      case "TEXTAREA":
        this.state.TEXTAREA.push(this.attributes.value);
        break;
    }

    this.toastr.success(`${this.selectedElementType} Configuration Saved`);
    this.attributes.reset();



    this.dataService.setState(this.state);

    // // (<HTMLElement>document.querySelector('.modal-backdrop')).style.display = 'none';
    // $AB('#myModal2').modal('hide');

    // // document.getElementsByClassName('modal-backdrop')[0].style.display = 'none'
    // // document.getElementById('myModal2').style.display = 'none'

    //Navigating to preview





  }
  ngOnInit() {
    this.attributes = this.fb.group({
      placeholder: [""],
      maxchar: [""],
      minchar: [""],
      cssclassname: [""],
      required: [false],
      inputtype: this.fb.group({
        type: [""]
      })
    });

  }



}