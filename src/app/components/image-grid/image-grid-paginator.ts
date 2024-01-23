import { Project } from "./image-grid.model";

export class Paginator {
    private data: Project[];
    private pageSize: number;
    private currentPage: number;

    constructor(data: Project[], pageSize: number) {
        this.data = data;
        this.pageSize = pageSize;
        this.currentPage = 1;
    }

    private getTotalPages(): number {
        return Math.ceil(this.data.length / this.pageSize);
    }

    getCurrentPageData(): Project[] {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return this.data.slice(startIndex, endIndex);
    }

    nextPage(): Project[] {
        if (this.currentPage < this.getTotalPages()) {
            this.currentPage++;
            return this.getCurrentPageData();
        } else {
            return []
        }
    }

    prevPage(): Project[] {
        if (this.currentPage > 1) {
            this.currentPage--;
            return this.getCurrentPageData();
        } else {
            return []
        }
    }

    hasNextPage(): boolean {
        return this.currentPage < this.getTotalPages();
    }

    hasPrevPage(): boolean {
        return this.currentPage > 1;
    }
}