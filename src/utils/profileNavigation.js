import axiosInstance from '../api/axiosInstance';

// 회원 ID를 이메일 handle로 변환하여 /my-page/{handle}/profile 로 이동
export const goToMemberProfile = (navigate, memberId) => {
  if (!memberId) return;
  axiosInstance.get(`/api/members/${memberId}/handle`)
    .then((res) => {
      const handle = res.data?.data?.memberHandle;
      if (handle) navigate(`/my-page/${handle}/profile`);
    })
    .catch(console.error);
};
