import Button from "./LightButton";
import Label from "./LightLabel";
import WidgetFactory from "./WidgetFactory";

export default class View{
  label: Label;
  button: Button;
  
  constructor(widgetFactory:WidgetFactory){
    this.label = widgetFactory.createLabel();
    this.button = widgetFactory.createButton();
  }
}