import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const {
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    latitude,
    longitude,
    timezone
  } = body;

  try {
    const res = await fetch('https://json.freeastrologyapi.com/western/natal-wheel-chart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'bxcDuzde331BaPfKsirS44TNUEg8VhOj3wVGsUjH',
      },
      body: JSON.stringify({
        year,
        month,
        date,
        hours,
        minutes,
        seconds,
        latitude,
        longitude,
        timezone,
        config: {
          observation_point: 'topocentric',
          ayanamsha: 'tropical',
          house_system: 'Placidus',
          language: 'en',
          exclude_planets: [],
          allowed_aspects: [
            'Conjunction',
            'Opposition',
            'Trine',
            'Square',
            'Sextile',
            'Semi-Sextile',
            'Quintile',
            'Septile',
            'Octile',
            'Novile',
            'Quincunx',
            'Sesquiquadrate'
          ],
          aspect_line_colors: {
            Conjunction: '#558B6E',
            Opposition: '#88A09E',
            Square: '#704C5E',
            Trine: '#B88C9E',
            Sextile: '#F1C8DB',
            'Semi-Sextile': '#A799B7',
            Quintile: '#9888A5',
            Septile: '#776472',
            Octile: '#445552',
            Novile: '#294D4A',
            Quincunx: '#49306B',
            Sesquiquadrate: '#E1CDB5'
          },
          wheel_chart_colors: {
            zodiac_sign_background_color: '#303036',
            chart_background_color: '#303036',
            zodiac_signs_text_color: '#FFFFFF',
            dotted_line_color: '#FFFAFF',
            planets_icon_color: '#FFFAFF'
          },
          orb_values: {
            Conjunction: 3,
            Opposition: 5,
            Square: 5,
            Trine: 5,
            Sextile: 5,
            'Semi-Sextile': 5,
            Quintile: 5,
            Septile: 5,
            Octile: 5,
            Novile: 5,
            Quincunx: 5,
            Sesquiquadrate: 5
          }
        }
      }),
    });

    const data = await res.json();
    return NextResponse.json({ svg: data.output });
  } catch (error) {
    console.error('Lỗi lấy dữ liệu bản đồ sao:', error);
    return NextResponse.json({ error: 'Không thể tạo bản đồ sao' }, { status: 500 });
  }
}
