// NG2
import { Component, Input } from '@angular/core';
import { FormUtils, DateControl } from 'novo-elements';
import {
  CheckListControl,
  FileControl,
  TextAreaControl,
  TextBoxControl,
  TilesControl,
  NovoToastService,
  PickerControl,
  Security,
} from 'novo-elements';
// APP
@Component({
  selector: 'platform-equipment-form',
  templateUrl: './form.component.html',
})
export class EquipmentFormComponent {
  textForm: any;
  textControl: any;
  tilesControl: any;
  compControl: any;
  dateControl: any;
  textAreaControl: any;
  private emailControl: any;
  private numberControl: any;
  private currencyControl: any;
  private aceEditorControl: any;
  phoneControl: any;

  constructor(private formUtils: FormUtils) {
    // Text-based Controls
    this.textControl = new TextBoxControl({
      key: 'text',
      label: 'Candidate',
      readOnly: true,
      value: 'Sarah Niles',
    });
    this.compControl = new TextBoxControl({
      key: 'company',
      label: 'Company',
      readOnly: true,
      value: 'Acme Corp',
    });
    this.dateControl = new DateControl({
      key: 'date',
      label: 'Start Date',
      readOnly: true,
      value: new Date('07/1/2018'),
    });
    this.tilesControl = new TilesControl({
      key: 'laptop',
      label: 'Needs Laptop?',
      options: [{ value: 'one', label: 'Yes' }, { value: 'Yes', label: 'No' }],
      required: true,
    });
    this.tilesControl = new TilesControl({
      key: 'laptop',
      label: 'Needs Laptop?',
      options: [{ value: 'one', label: 'Yes' }, { value: 'Yes', label: 'No' }],
      required: true,
    });
    this.phoneControl = new TilesControl({
      key: 'phone',
      label: 'Needs Phone?',
      options: [{ value: 'one', label: 'Yes' }, { value: 'Yes', label: 'No' }],
      required: true,
    });
    this.textAreaControl = new TextAreaControl({
      key: 'textarea',
      label: 'Special Requests',
      value: '',
      placeholder: 'Accessibility requirements, preferences, etc.',
    });
    this.textForm = formUtils.toFormGroup([
      this.textControl,
      this.compControl,
      this.dateControl,
      this.tilesControl,
      this.phoneControl,
      this.textAreaControl,
    ]);

    // // Check box controls
    // this.checkControl = new CheckboxControl({ key: 'check', label: 'Checkbox' });
    // this.checkListControl = new CheckListControl({
    //   key: 'checklist',
    //   label: 'Check List',
    //   options: ['One', 'Two', 'Three'],
    //   tooltip: 'CheckList',
    //   tooltipPosition: 'Top',
    // });
    // this.tilesControl = new TilesControl({
    //   key: 'tiles',
    //   label: 'Tiles',
    //   options: [{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }],
    //   tooltip: 'Tiles',
    // });
    // this.checkForm = formUtils.toFormGroup([this.checkControl, this.checkListControl, this.tilesControl]);
  }
}
