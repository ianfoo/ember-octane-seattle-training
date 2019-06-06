import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';

export default class TeamsRoute extends Route {
  /** @type { AuthService } */
  @service auth;

  // beforeModel is a good place to guard for authentication
  async beforeModel(transition) {
    await super.beforeModel(transition);
    if (!this.auth.isAuthenticated) {
      this.transitionTo('login');
    }
  }
}
