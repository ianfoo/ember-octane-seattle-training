import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {
  @tracked
  userId = null;

  @tracked
  userName = null;

  loginUser(userId) {
    console.log(userId);
  }

  /**
   *
   * @param {Event & {target: HTMLFormElement}} evt
   *
   * @action decorator ensures proper binding for calling this.loginUser
   * this would be the form element without the @action decorator.
   */
  @action
  onSubmitLoginForm(evt) {
    evt.preventDefault();
    const select = evt.target.querySelector('select');
    this.loginUser(select.value);
  }

  /**
   *
   * @param {Event & {target: HTMLSelectElement}} evt
   */
  @action
  onChangeSelect(evt) {
    this.userId = evt.target.value;
    this.userName = evt.target.selectedOptions[0].innerText;
  }

  get isDisabled() {
    return !this.userId;
  }
}
