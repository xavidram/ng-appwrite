import { Service } from '../service';

interface assoc {
  [key: string]: any;
}

export class Teams extends Service {
  /**
   * List Teams
   *
   * Get a list of all the current user teams. You can use the query params to
   * filter your results. On admin mode, this endpoint will return a list of all
   * of the project teams. [Learn more about different API modes](/docs/admin).
   *
   * @param string search
   * @param number limit
   * @param number offset
   * @param string orderType
   * @throws Exception
   * @return Promise<string>
   */
  async list(
    search: string = '',
    limit: number = 25,
    offset: number = 0,
    orderType: string = 'ASC'
  ): Promise<string> {
    let path = '/teams';

    return await this.client.call(
      'get',
      path,
      {
        'content-type': 'application/json',
      },
      {
        search: search,
        limit: limit,
        offset: offset,
        orderType: orderType,
      }
    );
  }

  /**
   * Create Team
   *
   * Create a new team. The user who creates the team will automatically be
   * assigned as the owner of the team. The team owner can invite new members,
   * who will be able add new owners and update or delete the team from your
   * project.
   *
   * @param string name
   * @param Array<string> roles
   * @throws Exception
   * @return Promise<string>
   */
  async create(
    name: string,
    roles: Array<string> = ['owner']
  ): Promise<string> {
    let path = '/teams';

    return await this.client.call(
      'post',
      path,
      {
        'content-type': 'application/json',
      },
      {
        name: name,
        roles: roles,
      }
    );
  }

  /**
   * Get Team
   *
   * Get team by its unique ID. All team members have read access for this
   * resource.
   *
   * @param string teamId
   * @throws Exception
   * @return Promise<string>
   */
  async get(teamId: string): Promise<string> {
    let path = '/teams/{teamId}'.replace(new RegExp('{teamId}', 'g'), teamId);

    return await this.client.call(
      'get',
      path,
      {
        'content-type': 'application/json',
      },
      {}
    );
  }

  /**
   * Update Team
   *
   * Update team by its unique ID. Only team owners have write access for this
   * resource.
   *
   * @param string teamId
   * @param string name
   * @throws Exception
   * @return Promise<string>
   */
  async update(teamId: string, name: string): Promise<string> {
    let path = '/teams/{teamId}'.replace(new RegExp('{teamId}', 'g'), teamId);

    return await this.client.call(
      'put',
      path,
      {
        'content-type': 'application/json',
      },
      {
        name: name,
      }
    );
  }

  /**
   * Delete Team
   *
   * Delete team by its unique ID. Only team owners have write access for this
   * resource.
   *
   * @param string teamId
   * @throws Exception
   * @return Promise<string>
   */
  async delete(teamId: string): Promise<string> {
    let path = '/teams/{teamId}'.replace(new RegExp('{teamId}', 'g'), teamId);

    return await this.client.call(
      'delete',
      path,
      {
        'content-type': 'application/json',
      },
      {}
    );
  }

  /**
   * Get Team Memberships
   *
   * Get team members by the team unique ID. All team members have read access
   * for this list of resources.
   *
   * @param string teamId
   * @throws Exception
   * @return Promise<string>
   */
  async getMemberships(teamId: string): Promise<string> {
    let path = '/teams/{teamId}/memberships'.replace(
      new RegExp('{teamId}', 'g'),
      teamId
    );

    return await this.client.call(
      'get',
      path,
      {
        'content-type': 'application/json',
      },
      {}
    );
  }

  /**
   * Create Team Membership
   *
   * Use this endpoint to invite a new member to join your team. An email with a
   * link to join the team will be sent to the new member email address if the
   * member doesn't exist in the project it will be created automatically.
   *
   * Use the 'URL' parameter to redirect the user from the invitation email back
   * to your app. When the user is redirected, use the [Update Team Membership
   * Status](/docs/teams#updateMembershipStatus) endpoint to allow the user to
   * accept the invitation to the team.
   *
   * Please note that in order to avoid a [Redirect
   * Attacks](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
   * the only valid redirect URL's are the once from domains you have set when
   * added your platforms in the console interface.
   *
   * @param string teamId
   * @param string email
   * @param Array<string> roles
   * @param string url
   * @param string name
   * @throws Exception
   * @return Promise<string>
   */
  async createMembership(
    teamId: string,
    email: string,
    roles: Array<string>,
    url: string,
    name: string = ''
  ): Promise<string> {
    let path = '/teams/{teamId}/memberships'.replace(
      new RegExp('{teamId}', 'g'),
      teamId
    );

    return await this.client.call(
      'post',
      path,
      {
        'content-type': 'application/json',
      },
      {
        email: email,
        name: name,
        roles: roles,
        url: url,
      }
    );
  }

  /**
   * Delete Team Membership
   *
   * This endpoint allows a user to leave a team or for a team owner to delete
   * the membership of any other team member. You can also use this endpoint to
   * delete a user membership even if he didn't accept it.
   *
   * @param string teamId
   * @param string inviteId
   * @throws Exception
   * @return Promise<string>
   */
  async deleteMembership(teamId: string, inviteId: string): Promise<string> {
    let path = '/teams/{teamId}/memberships/{inviteId}'
      .replace(new RegExp('{teamId}', 'g'), teamId)
      .replace(new RegExp('{inviteId}', 'g'), inviteId);

    return await this.client.call(
      'delete',
      path,
      {
        'content-type': 'application/json',
      },
      {}
    );
  }

  /**
   * Update Team Membership Status
   *
   * Use this endpoint to allow a user to accept an invitation to join a team
   * after he is being redirected back to your app from the invitation email he
   * was sent.
   *
   * @param string teamId
   * @param string inviteId
   * @param string userId
   * @param string secret
   * @throws Exception
   * @return Promise<string>
   */
  async updateMembershipStatus(
    teamId: string,
    inviteId: string,
    userId: string,
    secret: string
  ): Promise<string> {
    let path = '/teams/{teamId}/memberships/{inviteId}/status'
      .replace(new RegExp('{teamId}', 'g'), teamId)
      .replace(new RegExp('{inviteId}', 'g'), inviteId);

    return await this.client.call(
      'patch',
      path,
      {
        'content-type': 'application/json',
      },
      {
        userId: userId,
        secret: secret,
      }
    );
  }
}
