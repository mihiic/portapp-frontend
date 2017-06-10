export class Pagination {
  public pages: number;
  public currentPage: number;

  constructor(
    public perPage: number
  ) {
    this.pages = 1;
    this.currentPage = 1;
  }

  public getCurrentPage(list: any[]): any[] {
    return list.filter((el, i) => {
      return i >= (this.currentPage - 1) * this.perPage && i < this.currentPage * this.perPage;
    })
  }

  public getPage(list: any[], page: number): any[] {
    this.currentPage = page;
    return this.getCurrentPage(list);
  }

  public setPagesNumber(list: any[]): void {
    this.pages = Math.floor(list.length / this.perPage) + 1;
  }

  public nextPage(): void {
    if (this.currentPage < this.pages) {
      this.currentPage++;
    }
  }

  public prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  public hasNext(): boolean {
    return this.currentPage < this.pages;
  }

  public hasPrev(): boolean {
    return this.currentPage > 1;
  }
}
