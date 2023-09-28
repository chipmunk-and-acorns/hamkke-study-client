import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  Container,
  Box,
  Typography,
  Button,
  Chip,
  Stack,
  InputLabel,
  Divider,
} from '@mui/material';
import { HiArrowNarrowLeft, HiHeart } from 'react-icons/hi';
import { TbEyeCheck } from 'react-icons/tb';

import { userState } from '../../recoil/userState';
import { getArticle } from '../../api/articleApi';
import { IPosition, IResponseArticle, IStacks } from '../../types/article';
import { images } from '../../utils/importImageUrl';
import theme from '../../styles/theme';
import ListItem from '../../components/ListItem';

/**
 * 뒤로가기 버튼
 *
 * 타이틀
 *
 * 프로필 이미지 | 닉네임 | 등록일
 *
 * 모집 구분 | 진행 방식
 * 모집 인원 | 진행 기간
 * 모집 포지션 | 모집 마감일
 * 기술 스택
 *
 * 게시글 내용
 *
 * 조회수 | 좋아요
 *
 * 댓글
 * 댓글 입력창
 * 댓글 등록 버튼
 */

const DetailArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<IResponseArticle | null>(null);
  const userInfo = useRecoilValue(userState);

  const handleGetArticle = async (id: string) => {
    const data = await getArticle(id);
    if (data) setArticle(data);
  };

  /** 마감 버튼 클릭 ->  */

  /**
   * 수정 버튼 클릭 -> 수정 페이지로 이동
   */

  /** 삭제 버튼 클릭 -> alert으로 확인 -> 게시글 삭제 요청 */

  useEffect(() => {
    handleGetArticle(id);
  }, []);

  return (
    <Container maxWidth="md">
      <HiArrowNarrowLeft style={GoBackBtnStyle} />
      <Box sx={TitleStyle}>
        <Typography component="h4" variant="h4">
          {article?.title}
        </Typography>
        <Box>
          <Box>
            <img
              src={article?.memberImage ?? images.profileImage1}
              alt="user profile picture"
              style={{ width: '50px', height: '50px' }}
            />
            <span>{article?.member.nickname}</span>
            <Divider orientation="vertical" />
            <span>{article?.createdAt.split('T')[0].split('-').join('. ')}</span>
          </Box>
          <Box>
            {userInfo && (
              <>
                <Button color="secondary">
                  {userInfo && article?.isClosed ? '마감 취소' : '마감'}
                </Button>
                <Button>수정</Button>
                <Button color="error">삭제</Button>
              </>
            )}
          </Box>
        </Box>
      </Box>
      <Divider sx={DividerStyle} />
      <Box component="section" sx={SectionStyle}>
        <ul>
          <ListItem listName="모집 방식" content={article?.recruitmentType} />
          <ListItem listName="진행 방식" content={article?.progressMode} />
          <ListItem listName="모집 인원" content={`${article?.recruitmentLimit}명`} />
          <ListItem listName="진행 기간" content={`${article?.duration}개월`} />
          <ListItem>
            <Stack direction="row" spacing={1}>
              <InputLabel>모집 분야</InputLabel>
              {article?.positions?.map((position: IPosition) => (
                <Chip
                  key={position.positionId}
                  label={position.name}
                  component="span"
                  color="success"
                />
              ))}
            </Stack>
          </ListItem>
          <ListItem
            listName="모집 마감일"
            content={article?.closingDate.split('T')[0].split('-').join('. ')}
          />
          <ListItem>
            <Stack direction="row" spacing={1}>
              <InputLabel>사용 언어</InputLabel>
              {article?.stacks?.map((stack: IStacks) => (
                <Chip key={stack.stackId} label={stack.name} component="span" color="primary" />
              ))}
            </Stack>
          </ListItem>
        </ul>
      </Box>
      <Box sx={ContentStyle}>
        <Box>
          <div dangerouslySetInnerHTML={{ __html: article?.content }} />
        </Box>
        <Box>
          <Box>
            <TbEyeCheck />
            <span>{article?.viewCount}</span>
          </Box>
          <Box>
            <HiHeart />
            <span>{article?.likeCount}</span>
          </Box>
        </Box>
      </Box>
      {/** 댓글 컴포넌트 */}
    </Container>
  );
};

const GoBackBtnStyle = {
  fontSize: '2rem',
  color: theme.palette.grey[700],
};

const TitleStyle = {
  h4: {
    fontWeight: 'bold',
    my: '2rem',
  },
  div: {
    display: 'flex',
    justifyContent: 'space-between',

    hr: {
      borderWidth: 0,
      mr: '1rem',
      color: theme.palette.grey[500],
      backgroundColor: theme.palette.grey[500],
      width: '2px',
      height: '1.3rem',
    },

    'div:first-of-type': {
      display: 'flex',
      alignItems: 'center',
      img: {
        borderRadius: '50%',
      },
      'span:first-of-type': {
        mx: '1rem',
        fontWeight: 'bold',
      },
      'span:last-of-type': {
        color: theme.palette.grey[500],
      },
    },
  },
};

const DividerStyle = {
  mt: '3rem',
  borderWidth: 0,
  color: theme.palette.grey[300],
  backgroundColor: theme.palette.grey[300],
  height: '0.2rem',
};

const SectionStyle = {
  mt: '3rem',
  mb: '7rem',
  ul: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  li: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: '50%',
    mb: '1.2rem',

    div: {
      label: {
        lineHeight: '32px',
      },
    },
  },
  label: {
    fontWeight: 'bold',
    color: theme.palette.grey[700],
    mr: '1rem',
  },
  span: {
    fontWeight: 'bold',
  },
};

const ContentStyle = {
  display: 'flex',
  flexDirection: 'column',

  '> div:last-of-type': {
    mt: '3rem',
    display: 'flex',
    justifyContent: 'flex-end',
    div: {
      mr: '1rem',
      span: {
        ml: '0.3rem',
      },
    },
  },
};

export default DetailArticle;
