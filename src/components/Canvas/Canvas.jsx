import Figure from "../Figure/Figure";

function Canvas () {
  return (
    <main className="canvas">
      <section className="canvas__game-area">
        <Figure/>
      </section>
    </main>
  )
}

export default Canvas;