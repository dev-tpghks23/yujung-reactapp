const formatter = new Intl.RelativeTimeFormat('ko', { numeric: 'auto' });

const DIVISIONS = [
  { amount: 60,                name: 'seconds' },
  { amount: 60,                name: 'minutes' },
  { amount: 24,                name: 'hours'   },
  { amount: 7,                 name: 'days'    },
  { amount: 4.34524,           name: 'weeks'   },
  { amount: 12,                name: 'months'  },
  { amount: Number.POSITIVE_INFINITY, name: 'years' },
];

/**
 * Date 객체 또는 파싱 가능한 날짜 문자열을 받아 한국어 상대 시간 문자열로 반환합니다.
 * 값이 없거나 파싱 불가능하면 원본 값을 그대로 반환합니다.
 *
 * @param {Date|string|number} date
 * @returns {string}
 */
export function formatRelativeTime(date) {
  if (!date) return '';

  const target = date instanceof Date ? date : new Date(date);
  if (isNaN(target.getTime())) return String(date);

  let duration = (target.getTime() - Date.now()) / 1000;

  for (const division of DIVISIONS) {
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }

  return String(date);
}
