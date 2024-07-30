import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FirstStep_detail from './FirstStep_detail';
import Egg_detail from './Egg_detail';
import FullVegetable_detail from './FullVegetable_detail';

function ChallengeDetail() {
  const { challengeType } = useParams();
  const [detailComponent, setDetailComponent] = useState(null);

  useEffect(() => {
    switch (challengeType) {
      case 'firststep':
        setDetailComponent(<FirstStep_detail />);
        break;
      case 'egg':
        setDetailComponent(<Egg_detail />);
        break;
      case 'fullvegetable':
        setDetailComponent(<FullVegetable_detail />);
        break;
      default:
        setDetailComponent(<div>챌린지를 찾을 수 없습니다.</div>);
        break;
    }
  }, [challengeType]);

  return (
    <div>
      {detailComponent}
    </div>
  );
}

export default ChallengeDetail;
