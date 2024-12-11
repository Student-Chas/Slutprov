import { spawnSync } from 'child_process';

let output;

beforeAll(() => {
    const result = spawnSync('node', ['index.js'], { encoding: 'utf8' });
    output = result.stdout.trim();
});

test("Skriver ut böcker med pris", () => {
    expect(output).toMatch(/JavaScript för nybörjare - 200 kr/);
    expect(output).toMatch(/Avancerad CSS - 150 kr/);
    expect(output).toMatch(/HTML grunder - 100 kr/);
});

test("Skriver ut filtrerade böcker (under 150 kr)", () => {
    // Kollar att sektionen för filtrering finns med HTML grunder
    expect(output).toMatch(/Böcker under 150 kr:\s*HTML grunder - 100 kr/);
});

test("Skriver ut böcker sorterade efter titel", () => {
    // Letar efter sektionen med sorterade böcker
    const afterSortSplit = output.split("Böcker sorterade efter titel:");
    expect(afterSortSplit.length).toBeGreaterThan(1);

    const afterSort = afterSortSplit[1].trim();
    const lines = afterSort.split('\n').map(l => l.trim());

    // Kolla antal rader
    expect(lines.length).toBe(3);

    // Kontrollera ordningen
    expect(lines[0]).toBe("Avancerad CSS - 150 kr");
    expect(lines[1]).toBe("HTML grunder - 100 kr");
    expect(lines[2]).toBe("JavaScript för nybörjare - 200 kr");
});
