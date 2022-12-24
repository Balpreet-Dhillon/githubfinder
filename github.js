//GitHub Token
//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

class Github {
    constructor() {
      this.config = {
        headers: {
          Authorization: 'token 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'
        }
      }
      this.repos_count = 5
      this.repos_sort = 'created: asc'
    }
    async getUser(user) {
      const profileResponse = await fetch(
        `https://api.github.com/users/${user}`,
        this.config
      )
   
      const repoResponse = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
        this.config
      )
   
      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
   
      return {
        profile,
        repos
      }
    }
  }

