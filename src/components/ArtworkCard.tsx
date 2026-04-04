export default function ArtworkCard() {
  return (
    <div className="border border-earth/20 rounded max-w-sm p-4 text-charcoal">
      <div className="w-full h-48 bg-grey-light mb-4 rounded flex items-center justify-center">
        [Artwork Image]
      </div>
      <h3 className="font-serif text-lg text-wine">Artwork Title</h3>
      <p className="text-sm">Artwork Description</p>
    </div>
  );
}
