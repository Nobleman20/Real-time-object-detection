import { ObjectDetection } from "@tensorflow-models/coco-ssd";

export const drawRect = (
  detections: ObjectDetection[],
  ctx: CanvasRenderingContext2D | null
) => {
  detections.forEach((prediction) => {
    const [x, y, width, height] = prediction.bbox;
    const text = prediction.class;

    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    if (ctx) {
      ctx.strokeStyle = color;
      ctx.font = "18px Arial";
      ctx.fillStyle = color;

      ctx.beginPath();
      ctx.fillText(text, x, y);
      ctx.rect(x, y, width, height);
      ctx.stroke();
    }
  });
};
