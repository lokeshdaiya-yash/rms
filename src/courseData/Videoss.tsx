import './common.scss';
const Videoss = (myvideo: any) => {
  return (
    <div>
      <video
        controls
        src={myvideo.myVideo}
        className="video"
        width="700"
      ></video>
    </div>
  );
};
export default Videoss;
