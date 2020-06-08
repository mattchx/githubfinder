class Github {
  constructor() {
    this.client_id = '74908445896b2b394efd';
    this.client_secret = 'afb23c8bf7a07a48528f6b74dd6fac918011200c';
    this.repos_count = 5;
    this.repos_sort = 'create: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}
