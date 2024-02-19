import { Skeleton } from "@mui/material";

// eslint-disable-next-line react/prop-types
const SkeletonShow = ({ width, height, length , classess }) => {
  const SkeletonArr = Array.from({ length: length }).map((item, i) => (
    <div key={i}>
      <Skeleton
        variant="rounded"
        component={"div"}
        width={width}
        height={height}
      />
    </div>
  ));
  return <div className={classess}>{SkeletonArr}</div>;
};

export default SkeletonShow;
