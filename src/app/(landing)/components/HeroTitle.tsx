export default function HeroTitle({ className }: { className?: string }) {
  return (
    <div className={`font-Morabba ${className}  text-white `}>
      <h3 className="text-6xl font-bold mb-3">قهوه عربیکا تانزانیا</h3>
      <p className="text-5xl font-light">یک فنجان بالانس!</p>
      <div className="border-2 border-orange-300 max-w-24 mt-8"></div>
      <p className="font-Dana text-2xl max-w-[460px] mt-8">
        قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که
        در نواحی مختلف کمربند قهوه کشت میشود.
      </p>
    </div>
  );
}
