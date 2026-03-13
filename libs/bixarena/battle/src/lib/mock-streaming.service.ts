import { Injectable } from '@angular/core';
import { Observable, timer, map, take, scan } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MockStreamingService {
  private mockResponses = [
    `The BRCA1 gene plays a critical role in DNA repair through the homologous recombination pathway. Mutations in BRCA1 are strongly associated with increased risk of breast and ovarian cancers.

Key points:
- **Function**: BRCA1 acts as a tumor suppressor by maintaining genomic stability
- **Mechanism**: It forms complexes with other proteins (BARD1, BRCA2, RAD51) to repair double-strand DNA breaks
- **Clinical significance**: Carriers of pathogenic BRCA1 variants have a 55-72% lifetime risk of breast cancer
- **Treatment implications**: BRCA1-mutated tumors often respond well to PARP inhibitors like olaparib, which exploit synthetic lethality`,

    `CRISPR-Cas9 gene editing has revolutionized biomedical research and shows tremendous therapeutic potential. The system works by using a guide RNA to direct the Cas9 nuclease to a specific genomic location.

Recent advances include:
- **Base editing**: Precise single-nucleotide changes without double-strand breaks
- **Prime editing**: "Search and replace" capability for insertions, deletions, and substitutions
- **In vivo delivery**: Lipid nanoparticle-based delivery systems for liver-targeted therapies
- **Clinical trials**: Ongoing trials for sickle cell disease (CTX001/exa-cel) have shown promising results with functional cures in treated patients`,

    `Alzheimer's disease is a progressive neurodegenerative disorder characterized by accumulation of amyloid-beta plaques and tau neurofibrillary tangles in the brain.

Current understanding:
- **Amyloid hypothesis**: While debated, recent anti-amyloid therapies (lecanemab, donanemab) show modest cognitive benefits
- **Tau pathology**: Tau spread correlates more closely with cognitive decline than amyloid burden
- **Neuroinflammation**: Microglial activation and complement system dysregulation are increasingly recognized as key drivers
- **Biomarkers**: Blood-based p-tau217 tests now enable early detection with >90% accuracy, transforming clinical trial recruitment`,
  ];

  streamResponse(modelIndex: number): Observable<string> {
    const response = this.mockResponses[modelIndex % this.mockResponses.length];
    const words = response.split(' ');
    const totalTokens = words.length;

    return timer(0, 33).pipe(
      take(totalTokens),
      map((i) => words[i]),
      scan((acc, word) => acc + (acc ? ' ' : '') + word, ''),
    );
  }
}
