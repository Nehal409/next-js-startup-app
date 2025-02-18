const Ping = () => {
  return (
    <div className="relative">
      <div className="absolute -left-4 top-1">
        <span className="flex size-[11px]">
          {/* One circle that always pings */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>{" "}
          {/* One circle that is always active */}
          <span className="relative inline-flex size-[11px] rounded-full bg-primary"></span>{" "}
        </span>
      </div>
    </div>
  );
};

export default Ping;
