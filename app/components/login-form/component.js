import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {
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
  onLoginFormSubmit(evt) {
    evt.preventDefault();
    const select = evt.target.querySelector('select');
    this.loginUser(select.value);
  }
}
