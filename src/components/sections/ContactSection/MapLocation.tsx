
interface MapLocationProps {
  title: string;
  embedUrl: string;
}

export const MapLocation = ({ title, embedUrl }: MapLocationProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className="h-[300px] rounded-lg overflow-hidden">
        <iframe
          src={embedUrl}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Карта с нашим расположением"
        ></iframe>
      </div>
    </div>
  );
};
