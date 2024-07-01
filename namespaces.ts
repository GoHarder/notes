namespace Application {
  export interface DragItem {
    onDragStart(event: DragEvent): void;
    onDragEnd(event: DragEvent): void;
  }

  export interface DragTarget {
    onDrop(event: DragEvent): void;
    onDragOver(event: DragEvent): void;
    onDragLeave(event: DragEvent): void;
  }
}
